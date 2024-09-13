// ----Props are used to pass data from Parent to Child---- 

export const LearnProps = (props) => {
  return (
    <>
    <h1>{props.name}</h1>
    <h1>{props.roll}</h1>
    </>
  )
}


// ----Object Destructuring----

// export const LearnProps = ({name,roll}) => {
//     return (
//       <>
//       <h1>{name}</h1>
//       <h1>{roll}</h1>
//       </>
//     )
//   }
