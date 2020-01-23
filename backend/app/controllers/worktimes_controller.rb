class WorktimesController < ApplicationController
    def create
        worktimes = params[:employees].map{|employee_id|
            Worktime.create({
                role: params[:role], 
                startTime: params[:startTime], 
                endTime: params[:endTime], 
                employee_id: employee_id,
                restaurant_id: params[:restaurant_id]
            })
        }
        render json: worktimes
    end
end
