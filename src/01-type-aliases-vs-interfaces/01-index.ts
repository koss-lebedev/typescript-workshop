type Polygon = {
  area(): number
  vertexCount: number
}

interface IPolygon {
  area(): number
  vertexCount: number
}

class Triangle implements Polygon {
  vertexCount: 3

  area() {
    // calculate area...
    return 0
  }
}

