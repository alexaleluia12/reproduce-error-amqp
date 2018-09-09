
Object.prototype.isEmpty = function() {
     for(var key in this) {
         if(this.hasOwnProperty(key))
             return false;
     }
     return true;
}


class Person {
    constructor(name) {
        this.name = name;
        this.jobs = {};
    }
    
    hasJobs() {
        return this.jobs.isEmpty();
    }
};

module.exports = Person;
