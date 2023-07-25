import React from "react";
import { useTranslation } from "react-i18next";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Footer() {
  const [t, i18n] = useTranslation();
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-left"
      dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
    >
      <MDBContainer className="p-1">
        <MDBRow>
          <MDBCol lg="2" md="4" className="mb-4 mb-md-0">
            <h7 className="text-dark" style={{ fontWeight: "bold" }}>
              Top destinations{i18n.language==="en"?"":""}
            </h7>

            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in San Diego":"فنادق في سان دييغو"}
                </a>
              </li>{" "}
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in Nashville":"فنادق في ناشفيل"}
                </a>
              </li>{" "}
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in New York":"فنادق في نيويورك"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in Chicago":"فنادق في شيكاغو"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in Orlando":"فنادق في أورلاندو"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in San Diego":"فنادق في سان دييغو"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in Nashville":"فنادق في ناشفيل"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in San Francisco":"فنادق في سان فرانسيسكو"}
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg="2" md="4" className="mb-4 mb-md-0">
            <h7 className="text-dark" style={{ fontWeight: "bold" }}>
              {i18n.language==="en"?"Top Countries & Regions":"أعلى البلدان والمناطق"}
            </h7>

            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in Aruba":"فنادق في أروبا"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in Turkey":"فنادق في تركيا"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in Singapore":"فنادق في سنغافورة"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in Orlando":"فنادق في أورلاندو"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in San Diego":"فنادق في سان دييغو"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in Nashville":"فنادق في ناشفيل"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in Francisco":"فنادق في فرانسيسكو"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in New York":"فنادق في "}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels in Chicago":"فنادق في شيكاغو"}
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg="2" md="4" className="mb-4 mb-md-0">
            <h7 className="text-dark" style={{ fontWeight: "bold" }}>
              {i18n.language==="en"?"Support & FAQs":"الدعم والأسئلة الشائعة"}
            </h7>

            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Your bookings":"حجوزاتك"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"FAQs":"أسئلة وأجوبة"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Contact us":"اتصل بنا"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Review a property":"مراجعة الممتلكات"}
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg="2" md="4" className="mb-4 mb-md-0">
            <h7 className="text-dark" style={{ fontWeight: "bold" }}>
              {i18n.language==="en"?"For Suppliers":"للموردين"}
            </h7>

            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Affiliate with us":"انضم إلينا"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Expedia Partner Solutions":"حلول شركاء Expedia"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Promote with Us":"قم بالترويج معنا"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Travel Agents":"وكلاء السفر"}
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg="2" md="4" className="mb-4 mb-md-0">
            <h7 className="text-dark" style={{ fontWeight: "bold" }}>
              {i18n.language==="en"?"Policies":"سياسات"}
            </h7>

            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Terms & Conditions":"البنود و الظروف"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Privacy":"الخصوصية"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Your Privacy Choices":"خيارات الخصوصية الخاصة بك"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Cookies":"ملفات تعريف الارتباط"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"About our ads":"حول إعلاناتنا"}
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg="2" md="4" className="mb-4 mb-md-0">
            <h7 className="text-dark" style={{ fontWeight: "bold" }}>
              {i18n.language==="en"?"Other information":"معلومات أخرى"}
            </h7>

            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Other information":"معلومات أخرى"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Careers":"وظائف"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Hotels near me":"الفنادق القريبة مني"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Travel Guides":"ارشادات السفر"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Vacation rentals":"إيجارات العطلات"}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  {i18n.language==="en"?"Site Index":"فهرس الموقع"}
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className=" p-3">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          {i18n.language==="en"?"Hotels.com is an Expedia Group company. All rights reserved.Hotels.com and the Hotels.com logo are trademarks or registered trademarks of Hotels.com, LP in the United States and/or other countries. All other trademarks are the property of their respective owners. LP in the United States and/or other countries. All other trademarks are the property of their respective owners.":"Hotels.com هي إحدى شركات Expedia Group. جميع الحقوق محفوظة. Hotels.com وشعار Hotels.com علامات تجارية أو علامات تجارية مسجلة لشركة Hotels.com و LP في الولايات المتحدة و / أو دول أخرى. جميع العلامات التجارية الأخرى هي ملك لأصحابها. LP في الولايات المتحدة و / أو دول أخرى. جميع العلامات التجارية الأخرى هي ملك لأصحابها."}
        </a>
      </div>
    </MDBFooter>
  );
}
