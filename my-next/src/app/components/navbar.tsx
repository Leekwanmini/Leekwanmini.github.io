type NavbarProps = {
    name: string;
};
//This export to layout.tsx so it can be visible in every page
export default function Navbar({ name}: NavbarProps) {
    return (
        <nav style={{
            border: "1px solid white",
            padding: 16,
            marginBottom: 20,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                {name}
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
                <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
                <a href="/genres/artists" style={{ color: 'white', textDecoration: 'none' }}>All Artists</a>
                <a href="/genres/ukg" style={{ color: 'white', textDecoration: 'none' }}>UKG</a>
                <a href="/genres/ukb" style={{ color: 'white', textDecoration: 'none' }}>UKB</a>
                <a href="/genres/hiphop" style={{ color: 'white', textDecoration: 'none' }}>Hip Hop</a>
                <a href="/genres/hyperpop" style={{ color: 'white', textDecoration: 'none' }}>Hyper Pop</a>
                <a href="/genres/dub" style={{ color: 'white', textDecoration: 'none' }}>Dub</a>
            </div>
        </nav>
    );
}