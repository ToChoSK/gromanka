export default function imageLoader({ src }) {
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/gromanka' : '';

    // Ak src už obsahuje basePath, neprídavaj ho znovu
    if (src.startsWith(basePath)) {
        return src;
    }

    // Ak src začína s http/https, vráť ho ako je
    if (src.startsWith('http')) {
        return src;
    }

    // Pridaj basePath pre relatívne cesty
    return `${basePath}${src}`;
}
