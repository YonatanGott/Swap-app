//React elements and hooks imports
import {  FunctionComponent } from 'react'
import { MoonLoader } from 'react-spinners'
//Components imports

//Styling elements imports
const cssOverride = {
    display: 'block',
    margin: 0,
    borderColor: 'white'
}
//Typescript models & enums imports

const TransactionLoader: FunctionComponent = () => {

    return (
        <div className={style.wrapper}>
            <div className={style.title}>Transaction in progress...</div>
            <MoonLoader color={'#fff'} loading={true} cssOverride={cssOverride} size={50} />
        </div>
    )
}

const style = {
    wrapper: `text-white h-96 w-72 flex flex-col justify-center items-center`,
    title: `font-semibold text-xl mb-12`,
}

export default TransactionLoader