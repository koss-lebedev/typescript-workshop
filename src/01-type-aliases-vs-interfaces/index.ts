type Shape = {
  area(): number
}

class Rectangle implements Shape {
  area() {
    return 0
  }
}

interface ICircle extends Shape {
  radius: number
}

class Circle implements ICircle {
  radius: 5
  area() { return 10 }
}

interface IBox {
  width: number
  height: number
}

interface IBox {
  content: string
}

export const box: IBox = { width: 10, height: 10, content: 'test' }
