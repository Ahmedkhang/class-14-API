const DynamicBook = (props:any) => {
    console.log(props)
  return(
    <h1>Book Number :{props.params.id}</h1>
  )
}
export default DynamicBook;