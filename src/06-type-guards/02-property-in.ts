type Square = {
  size: number
}

type Rectangle = {
  width: number
  height: number
}

type Shape = Square | Rectangle

const getShapeArea = (shape: Shape): number => {
  if ('size' in shape) {
    return shape.size * 2
  } else {
    return shape.width * shape.height
  }
}
