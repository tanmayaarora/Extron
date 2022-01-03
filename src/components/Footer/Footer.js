import './Footer.scss'

export default function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <div>
                        <h3>LOCALHOST:3000</h3>
                    </div>
                    <div>
                        About Us
                    </div>
                    <div>
                        Blogs
                    </div>
                    <div>
                        Get in touch
                    </div>
                </div>
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <div>
                        <h3 style={{'paddingTop': '1px'}}>MORE</h3>
                    </div>
                    <div>
                        Terms and Conditions
                    </div>
                    <div>
                        Privacy Policy
                    </div>
                    <div>
                        Cookie Policy
                    </div>
                </div>
            </div>
        </footer>
    );
}
