import { FormControl } from "@angular/forms";
import { IUser } from "../../users/models";


export interface IClass {
    id: number;
    name: string;
    profesor: IUser;
  }
  export interface IClasssForm{
    name: FormControl<string | null>;
    profesor: FormControl<IUser | null>; 
  }

  export interface ICreateClassData{
    name?: string | null;
    profesor?: IUser | null; 
  }
 