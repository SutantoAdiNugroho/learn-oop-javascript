class Building{
    constructor (architect, buildingHeight) {
        this.architect = architect
        this.buildingHeight = buildingHeight
    }

    showArchitect() {
        return(`The architect who made this building is ${this.architect}`)
    }
    
    showHeight() {
        return(`The height of this building is ${this.buildingHeight}m`)
    }
}

class newInfoBuilding extends Building{
    constructor (architect, buildingHeight, floors) {
        super(architect, buildingHeight)
        this.floors = floors
    }
    showFloors() {
        return(`Number of floors is ${this.floors}`)
    }
}

class newInfoBuildings extends newInfoBuilding{
    constructor (architect, buildingHeight, floors, company, forSale) {
        super(architect, buildingHeight, floors)
        this.company = company
        this.forSale = forSale
    }
    showCompany() {
        return(`Company to use ${this.company}`)
    }
    showForSale() {
        return(`Is for sale? ${this.forSale}`)
    }
}

const newestInfoBuilding = new newInfoBuildings('Adi Nugroho S.T', 350, 120, 'PT. Adi Karsa', false)

console.log(newestInfoBuilding.showForSale())


