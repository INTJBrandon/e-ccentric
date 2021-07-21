class TransactionsController < ApplicationController
    def index 
        histories = Transaction.all
        render json: histories
    end

    def create
        transaction = Transaction.new(transaction_params)
        byebug
        if transaction.save
            render json: transaction
        end
    end


    def transaction_params
        params.require(:transaction).permit(:total, :length, :date, :paid)
    end
end
