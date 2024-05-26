import { FormControl } from "@angular/forms";
import { IUser } from "../../users/models";

export interface ICurso {
    id: number;
    name: string;
    profesor: string;
    inscription: number[];
    createdAt: Date;
  }
  export interface ICursoPayload{
    name: string | null;
    profesor: string| null;
    inscription: number[]| null;
    createdAt: Date | null;
  }
  export interface ICursoForm{
    name: FormControl<string | null>;
    students: FormControl<number | null>; 
  }

  export interface ICreateCursoData{
    name?: string | null;
  }
 
