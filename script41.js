console.log("41) Create a subclass `Magazine` that extends the `Book` class with an additional property `issue`.Add a method to the `Magazine` class to get the magazine's issue number.");

class Book1{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Magazine extends Book1{
    constructor(title,author,year,issue){
        super(title,author,year);
        this.issue = issue;
    }
    getIssueNumber(){
        return this.issue;
    }
}

const myMagazine = new Magazine('ABC', 'star', 2024, 8);
console.log(myMagazine.title);
console.log(myMagazine.getIssueNumber());