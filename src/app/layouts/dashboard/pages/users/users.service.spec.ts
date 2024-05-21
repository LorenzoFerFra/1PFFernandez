import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { environment } from '../../../../../environments/environment';
import { IUserPayload, IUser } from './models';

xdescribe('UsersService', () => {
  let usersService: UsersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
      imports: [HttpClientTestingModule],
    });

    usersService = TestBed.inject(UsersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('el metodo getUsers debe realizar una peticion GET a la direccion {apiUrl}/users', () => {
    usersService.getUsers().subscribe({
      next: (resp) => {
        expect(Array.isArray(resp)).toBeTrue();
      },
    });
    httpTestingController
      .expectOne({
        // metodo (GET, POST, PUT, DELETE)
        method: 'GET',

        url: environment.baseAPIURL + '/users',
      })
      .flush([]);
  });

  it('createUser debe ejecutar POST a {apiUrl}/users', () => {
    const payload: IUserPayload = {
      name: 'Koishi',
      weight: 69,
      lastName: 'Mario',
      email: 'kkhta@gmail.com',
      role: 'USER',
      createdAt: new Date(),
    };

    const mockResp: IUser = {
      id: 123,
      name: 'Koishi',
      email: 'asd@mail.com',
      weight: 69,
      lastName: 'Mario',
      role: 'ADMIN',
      createdAt: new Date(),
    };

    usersService.createUser(payload).subscribe((resp) => {
        // Solo comprueba que sean el mismo tipo de dato
      expect(resp).toEqual(mockResp);
    });

    httpTestingController
      .expectOne({
        method: 'POST',
        url: environment.baseAPIURL + '/users',
      })
      .flush(mockResp);
  });
});
