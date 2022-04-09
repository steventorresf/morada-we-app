import { Fragment } from "react"
import { PropertyTypeButton } from "./components/PropertyTypeButton"
import { PropertiesTypesContainer } from "./styles"
import { IoBusinessSharp, IoHome, IoMap, IoPrism, IoLocation } from "react-icons/io5";

const PropertiesType = [
    {icon: IoBusinessSharp, label: 'Apartamentos'},
    {icon: IoHome, label: 'Casas'},
    {icon: IoMap, label: 'Lotes'},
    {icon: IoPrism, label: 'Fincas'},
    {icon: IoLocation, label: 'Locales'}
]

export const Home = () => (
    <Fragment>
        <h1>Home - morada</h1>

        <PropertiesTypesContainer>
            {
                PropertiesType.map(item => <PropertyTypeButton icon={item.icon} label={item.label} />)
            }
        </PropertiesTypesContainer>
    </Fragment>
)