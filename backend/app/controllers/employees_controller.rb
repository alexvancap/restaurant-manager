class EmployeesController < ApplicationController
  def delete_employee
    employee = employee.find_by(params[:employee])
    employee.destroy
  end

  def create
    employee = Employee.create(name: params[:name], email: params[:email], phone: params[:phone], mainRole: params[:role])
    render json: employee
  end

  def get_employees
    render json: Employee.all
  end

end
