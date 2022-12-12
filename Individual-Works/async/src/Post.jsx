import { useEffect } from 'react'

function Post() {
    useEffect(() => {
        console.log('přidáno')

        return() => (console.log('odebáno'))

    }, []);

    return <div>
        <p className="text-center text-3xl">post</p>
    </div>
}
export default Post