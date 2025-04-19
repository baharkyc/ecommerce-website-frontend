const ClientLogo = ({href, src, alt}) => {
    return(
        <a href={href} className="w-24 h-24 m-2">
            <img
                className="object-cover w-full h-full"
                src={src}
                alt={alt}
            />
        </a>
    )
}

export default ClientLogo;