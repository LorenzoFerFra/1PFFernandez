import { FormControl } from "@angular/forms";
import { IUser } from "../../users/models";


export interface IClass {
    id: number;
    name: string;
    students: IUser;
  }
  export interface IClasssForm{
    name: FormControl<string | null>;
    students: FormControl<IUser | null>; 
  }

  export interface ICreateClassData{
    name?: string | null;
    students?: IUser | null; 
  }
 