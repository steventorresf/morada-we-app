import { Fragment } from "react"
import { PropertyTypeButton } from "./components/PropertyTypeButton"
import { PropertiesTypesContainer } from "./styles"

const PropertiesType = [
    {icon: 'icono-apartamento', label: 'Apartamentos'},
    {icon: 'icono-casa', label: 'Casas'},
    {icon: 'icono-lote', label: 'Lotes'},
    {icon: 'icono-finca', label: 'Fincas'},
    {icon: 'icono-local', label: 'Locales'}
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