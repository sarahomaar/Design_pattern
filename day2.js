class vehicles{
    constructor(mileage,price){
        this.mileage=mileage;
        this.price=price;
    }
}
 class car extends vehicles{
    constructor(mileage,price ,ownershipcost, warranty , seatingcap ,fueltype){
        super(mileage,price);
        this.ownershipcost=ownershipcost;
        this.warranty=warranty;
        this.seatingcap=seatingcap;
        this.fueltype=fueltype;
    }
 }
 class bike extends vehicles{
    constructor(mileage,price,cylinders,gears, coolingtype ,wheeltype, fueltanksize){
        super(mileage,price);
        this.cylinders=cylinders;
        this.gears=gears;
        this.coolingtype=coolingtype;
        this.wheeltype=wheeltype;
        this.fueltanksize=fueltanksize;
    }
 }
  class audi extends car {
    constructor(mileage,price ,ownershipcost, warranty , seatingcap ,fueltype,modeltype){
        super(mileage,price ,ownershipcost, warranty , seatingcap ,fueltype );
        this.modeltype=modeltype;

    }
    showinf(){
        return`modeltype:${this.modeltype},
        ownership cost:${this.ownershipcost},
        warranty:${this.warranty},
        seating capacity:${this.seatingcap},
        fuel type:${this.fueltype},
        mileage:${this.mileage},
        price:${this.price};`
    }

  }
let audiinf =new audi ("1","400$","22","10","5","diesel","string");
console.log(audiinf.showinf())


  class ford extends car {
    constructor(mileage,price ,ownershipcost, warranty , seatingcap ,fueltype,modeltype){
        super(mileage,price ,ownershipcost, warranty , seatingcap ,fueltype );
        this.modeltype=modeltype;

    }
    forinf(){
        return`
        mileage:${this.mileage},
        price:${this.price},
        ownership cost:${this.ownershipcost},
        warranty:${this.warranty},
        seating capacity:${this.seatingcap},
        fuel type:${this.fueltype},
        modeltype:${this.modeltype} ;`
    }
  }
  let infford =new ford ("2","500$","300","10","55","petrol","string");
  console.log(infford.forinf())

  class Bajaj extends bike{
    constructor(mileage,price,cylinders,gears, coolingtype ,wheeltype, fueltanksize ,maketype){
        super(mileage,price,cylinders,gears, coolingtype ,wheeltype, fueltanksize);
        this.maketype=maketype;
    }
    bajajinf(){
        return`
        mileage:${this.mileage},
        price:${this.price},
        cylinders:${this.cylinders},
        gears:${this.gears},
        coolingtype:${this.coolingtype},
        wheeltype:${this.wheeltype},
        fueltanksize:${this.fueltanksize},
        maketype:${this.maketype} ;`
    }
  }
  let binf =new Bajaj ("2","100$","300","10","liquid","petrol","large","string");
  console.log(binf.bajajinf())


  class TVS extends bike{
    constructor(mileage,price,cylinders,gears, coolingtype ,wheeltype, fueltanksize,maketype){
        super(mileage,price,cylinders,gears, coolingtype ,wheeltype, fueltanksize);
        this.maketype=maketype;
    }

  }

  ///2
   class computer{

   }