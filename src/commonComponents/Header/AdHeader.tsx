const AdHeader = () => {
    return <div className="adHeader">
        <div className="containerOne">
            <p className="adNoteText">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <a href="/deals" className="goToLink">Shop Now</a>
        </div>
        <div className="containerTwo">
            <select name="langSelector" id="" className="langSelector">
                <option>English</option>
            </select>
        </div>
    </div>
}

export default AdHeader;