class HistoriesController < ApplicationController
    def index 
        histories = History.all
        render json: histories
    end

    def create
        transaction = History.new(history_params)
        if transaction.save
            render json: transaction
        end
    end


    def history_params
        params.require(:history).permit(:total, :length, :date, :paid)
    end
end
