import { ReactElement } from "react"

// export const apiUrl = "http://localhost:4000/api"
export const apiUrl = "https://pmo-ios-backend.herokuapp.com/api"   // backend hosted on heroku


export const getMax = (array: number[]): number => {
  let res = 0
  array.map(a => {
    if (a > res) { res = a }
  })
  return res
}


export const allianzBlue = "#16549C"
export const standardGrey = "#ededed"


export const getColors = (input: number): string[] => {       // returns grey and green/yellow/red/blue for Big Dot / Doughnut Charts
  const colors = [standardGrey];   // light grey
  if (input === 0) {
    colors.push('#00C49F') // green
  } else if (input === 1) {
    colors.push('#fcd72d') // yellow
  } else if (input === 2) {
    colors.push('#fc0303') // red
  } else if (input === -1) {
    colors.push(allianzBlue) // Allianz blue
  } else {
    colors.push(standardGrey) // both light grey
  }
  return colors
}

export const getCircle = (input: number, size: number): ReactElement => {
  let color
  switch (input) {
    case 0:
      color = "bg-success"
      break
    case 1:
      color = "bg-warning"
      break
    case 2:
      color = "bg-danger"
      break
    default:
      color = "bg-success"
      break

  }
  return <div className={"justify-content-center mx-auto text-center rounded-circle text-truncate " + color}
    style={{ height: size, width: size }} ></div>
}


export const focusAreaColors = {
  SH: "#fc9003",
  ID: "#03e3fc",
  RD: "#d6a9a9",
  SC: "#c4a9c4",
  BS: "#f2e085",
}
