class TransactionsController < ApplicationController
    def index 
        histories = Transaction.all
        render json: histories
    end

    def create
        transaction = Transaction.new(transaction_params)
        if transaction.save
            render json: transaction
        end
    end

    def update 
        transaction = Transaction.find_by(id: params[:id])
        if transaction.update(transaction_params)
            render json: transaction
        end
    end


    def transaction_params
        params.require(:transaction).permit(:id, :total, :length, :date, :paid)
    end
end
