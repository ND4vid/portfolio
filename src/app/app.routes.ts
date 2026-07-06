import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AfterSchool } from './after-school/after-school';
import { ProcessorInventoryApi } from './processor-inventory-api/processor-inventory-api';
import { UserManagementApi } from './user-management-api/user-management-api';

export const routes: Routes = [
    { path: "", component: Home, title: "David Neuheiser | Backend / Fullstack Dev" },
    { path: "user-management-api", component: UserManagementApi, title: "User Management API" },
    { path: "processor-inventory-api", component: ProcessorInventoryApi, title: "Processor-Inventory API" },
    { path: "after-school", component: AfterSchool, title: "After School (backend)" }
];
