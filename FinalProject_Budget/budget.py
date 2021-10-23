from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy


app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:chen@localhost/budget'
db=SQLAlchemy(app)



# Create db model
class Data(db.Model):
    __tablename__="Data"
    id=db.Column(db.Integer,primary_key=True)
    income_=db.Column(db.Integer)
    expense_=db.Column(db.Integer)


    def __init__(self, income_, expense_):
        self.income_=income_
        self.expense_=expense_


@app.route("/")
def index():
    return render_template("budget.html")


@app.route("/thankyou", methods=['POST','GET'])
def thankyou():
    if request.method=='POST':
        income=request.form["income_name"]
        expense=request.form["expense_name"]
        print(request.form)

        data=Data(income, expense)
        db.session.add(data)
        db.session.commit()

        allIncome = 0
        allExpense = 0

        Data1=Data.query.all()
        for totalIn in Data1:
            allIncome+=totalIn.income_

        for totalExp in Data1:
            allExpense+=totalExp.expense_

        balance = allIncome-allExpense


        return render_template("thankyou.html",dataIncome=request.form["income_name"], dataExpense=request.form["expense_name"], datatotalIncome=allIncome, datatotalExpense=allExpense, dataBalance=balance)


if __name__=='__main__':
    app.debug=True
    app.run()
