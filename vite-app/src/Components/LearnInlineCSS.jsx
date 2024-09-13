
export const LearnInlineCSS = () => {
    const btnStyle = {        //Variable for Method 2 and Method 3
        color : 'red',
        backgroundColor : 'orange'
    }
  return (
    <>
    {/* Method 1 */}
    <p style={{'fontSize': '40px', 'color' : 'red'}}>Hello React + Vite React App + Frontend Web Developer</p> 
     {/* Method 2 */}
    <button style={btnStyle}>Button 1</button>
    {/* Method 3 */}
    <button style={{...btnStyle, ...{'fontSize': '40px'}}}>Button 2</button>


    </>
  )
}
