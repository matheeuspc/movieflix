import ContentLoader from "react-content-loader"

const MovieDetailsLoader = () => (
    <ContentLoader
        speed={2}
        width={1366}
        height={768}
        viewBox="0 0 1366 768"
        backgroundColor="#9E9E9E"
        foregroundColor="#d6d2d2"
    >
        <circle cx="31" cy="31" r="15" />
        <rect x="-73" y="-87" rx="2" ry="2" width="321" height="321" />
        <rect x="261" y="1" rx="0" ry="0" width="327" height="233" />
        <rect x="1" y="253" rx="0" ry="0" width="587" height="106" />
        <rect x="5" y="379" rx="0" ry="0" width="579" height="136" />
    </ContentLoader>
)

export default MovieDetailsLoader;