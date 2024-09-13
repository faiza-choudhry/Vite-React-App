import Pic from '/public/image1...jpeg'
import SupaPic from '../assets/image2...jpeg'
export const LearnUseOfImage = () => {
  return (
    <>
    <h1>Images</h1>
    <img src={Pic} alt=""  width="400px"/>
    <br />
    <img src={SupaPic} alt=""  width="300px"/>
    </>
  )
}
