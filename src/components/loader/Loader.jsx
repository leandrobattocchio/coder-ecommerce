import './loader.css'

function Loader () {
    return (
        <div style={{ width: '100%', height: '445px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div class="newtons-cradle">
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
            </div>
        </div>
    )
}

export default Loader