//PageContent.jsx
//Simple wrapper component for page content.
//Commonly used between Header and Footer components.

const PageContent = ({children}) => {

    return (
        <div >
            {children}
        </div>
    )
}

export default PageContent;