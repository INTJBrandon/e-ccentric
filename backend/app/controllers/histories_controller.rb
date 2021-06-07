class HistoriesController < ApplicationController
    def index 
        histories = History.all
        render json: histories
    end

    def create
        history = History.new(history_params)
        if history.save
            render json: comment
    end


    def history_params
        params.require(:history).permit(:total, :length, :date, :paid)
    end
end
