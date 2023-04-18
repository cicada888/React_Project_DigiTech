import './style1.css';
import myImage from '../wp-content/uploads/2019/10/TECH.png';


function Header() {
  return (
    <>

      <div>
        <div id="page-container">
          <div id="top-header">
            <div className="container clearfix">
              <div id="et-info">
              </div>
              <div id="et-secondary-menu">
                <i className="fa fa-whatsapp" aria-hidden="true" />
                <span id="my_whatsapp">
                  <a href="https://web.whatsapp.com/send?phone=+91 8750731943">+91 8750731943</a>
                </span>
                <i className="fa-solid fa-phone" />
                <span id="my_whatsapp">
                  <a href="tel:+91 8750731943">+91 8750731943</a>
                </span>
                <a href="mailto:digitech.com"><span id="et-info-email">digitech.com</span></a>
              </div>
            </div>
          </div>
          <header id="main-header" data-height-onload={66}>
            <div className="container clearfix et_menu_container">
              <nav>
                <div className="logo_container">
                  <span className="logo_helper" />
                  <a href>
                    <img src={myImage} alt="Radiant Techlearning" id="logo" data-height-percentage={54} />
                  </a>
                </div>
                <div className="wrapper">
                  <input type="radio" name="slider" id="menu-btn" />
                  <input type="radio" name="slider" id="close-btn" />
                  <ul className="nav-links">
                    <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times" /></label>
                    <li><a href="#">Home</a></li>
                    <li>
                      <a href="#" className="desktop-item">Technology &amp; Certification</a>
                      <input type="checkbox" id="showMega" />
                      <label htmlFor="showMega" className="mobile-item">Technology &amp; Certification</label>
                      <div className="mega-box">
                        <div className="content">
                          <div className="row">
                            <ul className="mega-links">
                              <li><a href="#">MICROSOFT</a></li>
                              <li><a href="#">AWS</a></li>
                              <li><a href="#">INFORMATICA</a></li>
                              <li><a href="#">Salesforce</a></li>
                            </ul>
                          </div>
                          <div className="row">
                            <ul className="mega-links">
                              <li><a href="#">Oracle</a></li>
                              <li><a href="#">IBM</a></li>
                              <li><a href="#">Redhat</a></li>
                              <li><a href="#">SAP</a></li>
                            </ul>
                          </div>
                          <div className="row">
                            <ul className="mega-links">
                              <li><a href="#">PMP</a></li>
                              <li><a href="#">Juniper</a></li>
                              <li><a href="#">Citrix</a></li>
                              <li><a href="#">Cisco</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="desktop-item">Specialisation</a>
                      <input type="checkbox" id="showMega" />
                      <label htmlFor="showMega" className="mobile-item">Specialisation</label>
                      <div className="mega-box">
                        <div className="content">
                          <div className="row">
                            <ul className="mega-links">
                              <li><a href="#">Cloud Computing</a></li>
                              <li><a href="#">AI
                                &amp; ML</a></li>
                              <li><a href="#">Data
                                Science &amp; Analytics</a></li>
                              <li><a href="#">Big Data</a></li>
                            </ul>
                          </div>
                          <div className="row">
                            <ul className="mega-links">
                              <li><a href="#">BI &amp;
                                Visualisation</a></li>
                              <li><a href="#">Agile &amp; SCRUM</a></li>
                              <li><a href="#">DevOps</a></li>
                              <li><a href="#">Databases</a></li>
                            </ul>
                          </div>
                          <div className="row">
                            <ul className="mega-links">
                              <li><a href="#">Operating System</a></li>
                              <li><a href="#">Software Testing</a></li>
                              <li><a href="#">Cyber Security</a></li>
                              <li><a href="#">Mobile
                                Development</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li><a href="#">About US</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CONTACT US</a></li>
                  </ul>
                  <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars" /></label>
                </div>
              </nav>
            </div>
          </header>
          <div id="et-main-area">
            <div id="main-content">
              <article id="post-9" className="post-9 page type-page status-publish hentry">
                <div className="entry-content">
                  <div id="et-boc" className="et-boc">
                    <div className="et-l et-l--post">
                      <div className="et_builder_inner_content et_pb_gutters3">
                        <div className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular">
                          <div className="et_pb_row et_pb_row_0 et_pb_gutters1">
                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                              <div className="et_pb_module et_pb_text et_pb_text_0 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                <div className="et_pb_text_inner">
                                  <h3>Radiant Techlearning</h3>
                                </div>
                              </div>
                              <div className="et_pb_module et_pb_text et_pb_text_1 et_animated  et_pb_text_align_center et_pb_bg_layout_dark">
                                <div className="et_pb_text_inner">
                                  <p>Technology Training | IT Consulting | IT Projects</p>
                                </div>
                              </div>
                              <div className="et_pb_with_border et_pb_module et_pb_search et_pb_search_0 et_animated  et_pb_text_align_left et_pb_bg_layout_light">
                                <form role="search" method="get" className="et_pb_searchform" action>
                                  <div>
                                    <label className="screen-reader-text" htmlFor="s">Search
                                      for:</label>
                                    <input type="text" name="s" placeholder className="et_pb_s" />
                                    <input type="hidden" name="et_pb_searchform_submit" defaultValue="et_search_proccess" />
                                    <input type="hidden" name="et_pb_include_posts" defaultValue="yes" />
                                    <input type="hidden" name="et_pb_include_pages" defaultValue="yes" />
                                    <input type="submit" defaultValue="Search" className="et_pb_searchsubmit" />
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article></div>
          </div>
        </div>
        {/* <hr /> */}
      </div>


    </>
  )
}
export default Header