import { makeAutoObservable } from "mobx";
import {
    IUserDepartmentFilterOption,
    USER_DEPARTMENT_FILTER_OPTIONS,
} from "../constants/userFilters";

export class DepartmentsStore {
    allDepartments: IUserDepartmentFilterOption[] = USER_DEPARTMENT_FILTER_OPTIONS;
    selectedDepartments: IUserDepartmentFilterOption[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    isDepartmentSelected(departmentOption: IUserDepartmentFilterOption) {
        return this.selectedDepartments.some(
            (selectedDepartment) => selectedDepartment.department === departmentOption.department,
        );
    }

    toggleDepartment(departmentOption: IUserDepartmentFilterOption) {
        const isSelected = this.isDepartmentSelected(departmentOption);

        if (isSelected) {
            this.selectedDepartments = this.selectedDepartments.filter(
                (selectedDepartment) =>
                    selectedDepartment.department !== departmentOption.department,
            );
            console.log(this.selectedDepartments + "32123");
        } else {
            const departmentToAdd = this.allDepartments.find(
                (department) => department.department === departmentOption.department,
            );
            if (departmentToAdd) {
                this.selectedDepartments.push(departmentToAdd);
                console.log(this.selectedDepartments + "123");
            }
        }
    }

    clearSelection() {
        this.selectedDepartments = [];
    }

    selectAll() {
        this.selectedDepartments = [...this.allDepartments];
    }
}

export const departmentsStore = new DepartmentsStore();
