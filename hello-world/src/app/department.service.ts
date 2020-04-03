import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  getDepartment()
  {
    return ["Department1","Department2","Department3"];
  }
}
