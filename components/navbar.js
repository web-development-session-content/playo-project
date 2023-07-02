function navbar(){
    return `<div id="navbar">
                <a id="active" href="index.html">
                    <img id="logo" src="https://playo-website.gumlet.net/logo/playo-logo-header-website.png?auto=compress,format&amp;q=90" alt="">
                </a>

                <ul id="nav_options" style="font-weight:550; background-color=red display:flex; justify-content: end; width=30%">
                    <li><a href="venues.html"><span class="link-btn">PLAY</span></a></li>
                    <li><a href="activities.html"><span class="link-btn">BOOK</span></a></li>
                    <li><a href="blog.html"><span class="link-btn">LEARN</span></a></li>
                </ul>
            </div>`;
}

export default navbar;