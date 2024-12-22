

class Rectangle{
    
    constructor(height, width, color){
        this.height = height;
        this.width = width;
        this.color = color;
    }

    area(){
        const area = this.width * this.height;
        return area;
    }

    paint(){
        console.log(`Painting with the color is ${this.color}`);
    }

}

/*

const rect = new Rectangle(10, 20, "Red");
const area = rect.area();
console.log(`The area of the rectangle is ${area} and the color is ${rect.color}`);



const rect = {
    width : 10,
    height : 20,
    color : "Blue",
}

function area(rect){
    return rect.height * rect.width;
} 

const ans = area(rect);
console.log(`The area of the rectangle is ${ans} and the color is ${rect.color}`);

*/