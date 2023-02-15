import React from "react"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar"
import "./Sustainability.css"
import Collapsible from "react-collapsible";
import img1 from '../../images/Sustainability.svg'
import img4 from '../../images/Bussiness_impact.svg'
import img3 from '../../images/Our_people.svg'
import img2 from '../../images/Our_planet.svg'

function Sustainability() {
    return <div>
    <Navbar />
    <header className="Header">
        <div className="Name">
            Sustainability
        </div>
        <div className="Name--content">
           We have an influence that goes beyond the job we do for clients. We place a high importance on preserving social and environmental norms because we firmly believe in setting an example in all we do.
        </div>
        <div className="Text">
          We don't simply discuss sustainability with other people. BCS has been recognized as one of the greatest places to work since 2012 and has been certified as carbon neutral since that time. Every day, we aim to lessen our impact on the environment, improve employee wellbeing, uphold the highest standards of ethics, and source goods and services sustainably.
        </div>

        <div className="Stake">
            Materiality Assessment
        </div>
        <div className="Material--content">
            <div className="Stake--content Text">
                Every year, we perform a detailed process to determine the subjects that are most relevant to BCS's ESG disclosures. We narrowed down the areas that are important to BCS & Company as a professional services company using comments from our stakeholders, who are mentioned below, and industry benchmarking data from other businesses.

Senior leadership and company-wide ESG specialists prioritized themes from that shortlist according to their effect on our business and on our stakeholders. All of the above-mentioned subjects are significant to BCS and are regularly followed, but we have chosen the seven below as being the most pertinent to our business operations.
            </div>
            <div>
                <img src={img1} alt="IMG" />
            </div>
        </div>
        <div className="Stake">
            Our Stakeholders
        </div>
        <div className="Stake--content Text">
            We work closely with our stakeholders because we think that the most difficult sustainability problems can't be solved on our own. The following internal and external stakeholder groups have all been chosen because they have a significant impact on our company as well as because they have a significant impact on our company. We engage with them on a regular basis.
        </div>
        <div className="Text space">
        <Collapsible className="Dropdown" trigger="Information we collect & how we use it">
        <p className="Dropdown--content">
            Your name, contact information, occupation, firm or academic affiliation, industry, location, and country, as well as your relationship to BCS, purpose for contacting BCS, areas of interest, and any other information you want to submit, may all be collected by BCS. You expressly consent to BCS handling your personal data in line with this Privacy Policy by using our Sites or providing us information. Your personal information may be used by BCS to complete your request, send you marketing materials, handle your job application, or administer your BeyondBCS membership.

When you use the Sites to request information from BCS or to provide information to BCS, such as when you fill out a form requesting consulting expertise, agree to receive emails from BCS, take surveys, join our alumni community, BeyondBCS, or apply for a job at BCS, BCS collects personal data from you.

Your name, email address, title, occupation, affiliation with a company or university, industry, region, or country are just a few examples of the personal information we may collect from you. We may also ask you for information about your interests in certain topics, any additional background data you may have included with your application, and any other details you include in messages you send us.

In accordance with our cookie policy, we may also gather data on how you utilize our websites. Be aware that BeyondBCS is subject to a different cookie policy, which you can read below.

You voluntarily consent to BCS using your personal information in the ways and for the purposes specified in this Privacy Policy by using our Sites and providing us with this information. Sending us any information that you do not want BCS to use is a courtesy.

In order to fulfill your request, give you the information you requested, and/or send you marketing materials, BCS will use your personal data. Your data will be handled if you have applied for a position at BCS in order to evaluate and process your application and candidacy for the post you have applied for. Additionally, we could use your data to offer you publications we believe would interest you and to contact with you about BCS events as well as to assess and enhance our hiring and onboarding procedures. The section under "Job Applicants" has further information.

For marketing and promotional reasons, BCS may gather personal information and divulge it in aggregate form to third-party service providers. However, we never give these organizations any information that may be used to individually identify you in these circumstances.

Your information will be processed if you sign up as a member on BeyondBCS for activities like sending surveys and mailings to alumni specifically as well as keeping and distributing marketing and career development contacts. Other BeyondBCS members could also be able to see your data.

You are not required to give us any personal information. But if you don't, we might be unable to deal with your request or offer you the services you need.

For as long as it takes to complete your request or as long as we have a business relationship with you, BCS will retain your personal information. BCS will retain the personal information related to your application for a position with them for up to five years.

Please be aware that BCS is not liable for any information you choose to make public on message boards, chat rooms, or other similar websites, including those that are hosted on or linked to our Sites. Whenever you openly provide information about yourself online (for instance, via message boards or chat rooms), you should be aware that this information might be gathered and exploited by strangers. Additionally, along with the poster's name and content, certain message boards and related user forums may also display IP addresses. If there are any message boards, chat rooms, or other user forums on the Sites, users may reveal information there. BCS is not liable for any actions or policies taken by third parties who obtain this information.
        </p>
      </Collapsible>
      <Collapsible className="Dropdown" trigger="Use of cookies on this site">
        <p className="Dropdown--content">
          When you use our websites, we may gather specific types of information through the use of cookies or other technologies (referred to as "cookies"). Our Cookie Policy contains information on the types of data that are gathered and their intended uses.

Please be aware that BeyondBCS has its own cookie policy, which you can find here, which governs how cookies are used on the site.
        </p>
      </Collapsible>
      <Collapsible className="Dropdown" trigger="Who we share your personal data with">
        <p className="Dropdown--content">
          We may share your personal data with others, such as:
other offices in the BCS group. 
carefully chosen third-party service providers, including marketing service providers (if you have subscribed to our marketing communications), IT systems providers, recruitment service providers, background check providers, data cleansing providers, or event organisers, who provide services to BCS.
other alumni members if you have chosen to take part in the Alumni network.
When requested, we cooperate with law enforcement officials or other governmental organisations.

Your personal information will only be handled by third parties on behalf of BCS for the reasons outlined in this Policy, excluding law enforcement agencies or other governmental entities. Your personal information won't be sold or otherwise made available to these third parties for their own use by BCS.

It's possible that the businesses in the BCS group and any third parties with which we disclose your information are situated in nations with less stringent privacy laws than the one in which you reside. In some circumstances, BCS makes sure your personal information is secured by utilising the proper legal tools.
        </p>
      </Collapsible>
      <Collapsible className="Dropdown" trigger="Link to other websites">
        <p className="Dropdown--content">
          Our websites may connect to other websites run by third parties, each of which has its own terms and privacy policies. For the content of these websites or how you use them, BCS disclaims all duty and accountability.

The Sites may link to external websites, such as social networking sites. Before using these websites or providing any personal information to them, you should consider their terms of use and privacy policies. The privacy policies of such websites are not the responsibility of BCS. Furthermore, BCS does not support or take any responsibility for the content or use of any website that is linked to by a third party. For such material or your use of these websites, BCS disclaims all liability and accountability.
        </p>
      </Collapsible>
      <Collapsible className="Dropdown" trigger="Security of you personal data">
        <p className="Dropdown--content">
          To prevent the loss, abuse, modification, or destruction of your personal information, BCS has put in place the necessary 
          organisational and technological security measures. 
          These precautions include, when practical, anonymizing or pseudonymizing data. 
          Only those members of the authorised BCS staff and the aforementioned third parties who require access to your personal information in order to perform their duties or deliver their services will have access to it. 
          Despite these security measures, BCS is unable to ensure that unauthorised parties won't access your information.
        </p>
      </Collapsible>
      <Collapsible className="Dropdown" trigger="Your rights">
        <p className="Dropdown--content">
          The rights you may have in relation to the personal information BCS has on you will depend on where you live. You may, for instance, be entitled to ask for access to and a copy of your information as well as details about how we use it. You have the right to ask that any false, outdated, or erroneous information we may hold about you be changed. Additionally, you may be able to request that we cease processing your information, that you withdraw your permission to such processing, and that we destroy your information.

If BCS has personal information on you and you would like to seek access, rectification, cancellation, or opposition to the way in which BCS uses that information, please fill out our data subject request form.

If you get marketing emails from BCS, you may choose not to receive them in the future or unsubscribe from our programmes by visiting the "preferences" page, which is available in each marketing email you receive from BCS. Utilizing our data subject request form, you may also make an opt-out request.

Please use our data subject request form to contact us if you believe that we are handling your information improperly. Additionally, you may be able to file a complaint with your national supervisory authority.

Please take notice that before executing your request, we will make a reasonable effort to confirm your identity.
        </p>
      </Collapsible>
    </div>


    <div className="Stake">
            Sustainability at BCS
        </div>
        <div className="Stake--Title">
            Our Planet
        </div>
        <div className="Material--content">
            <div className="Stake--content Text">
                With programs that offset more than 100% of Scope 1, 2, and 3 emissions, BCS will be net-negative in carbon starting with its 2021 carbon footprint. Going forward, the corporation wants to keep its net-negative condition.
                <br /><br />
We agreed to achieve 100% net-zero carbon emissions across all of our businesses by 2030 when we signed the Business Ambition for 1.50C commitment letter in 2020.
<br /><br />
Employees who are passionate about lessening our impact on the environment and who support regional sustainability efforts make up the green teams in our local offices. They support global efforts to reduce waste and increase energy efficiency.
            </div>
            <div>
                <img src={img2} alt="IMG" />
            </div>
        </div>

        <div className="Stake--md--Title">
            Our People
        </div>
        <div className="Material--content">
            <div>
                <img src={img3} alt="IMG" />
            </div>
            <div className="Stake--content Text">
                With programs that offset more than 100% of Scope 1, 2, and 3 emissions, BCS will be net-negative in carbon starting with its 2021 carbon footprint. Going forward, the corporation wants to keep its net-negative condition.
We agreed to achieve 100% net-zero carbon emissions across all of our businesses by 2030 when we signed the Business Ambition for 1.50C commitment letter in 2020.
Employees who are passionate about lessening our impact on the environment and who support regional sustainability efforts make up the green teams in our local offices. They support global efforts to reduce waste and increase energy efficiency.
            </div>
        </div>

        <div className="Stake--Title">
            Business Impact
        </div>
        <div className="Material--content">
            <div className="Stake--content Text">
                Environmental sustainability is no longer an option, especially when trying to attract younger customers. Businesses must discover the correct message to convey to customers that they are making efforts to improve their processes in a sustainable manner.
<br /><br />
By improving our governance and risk management policies and processes, increasing our professional development and ethical standards training programmes, and sourcing and procurement in a sustainable way, BCS consistently aspires to do business in a sustainable and responsible manner.
            </div>
            <div>
                <img src={img4} alt="IMG" />
            </div>
        </div>
    <div className="Stake">
        Additional Materials
    </div>
    <div className="Additional">
        <div className="Additional--Title">
            GRI Index
        </div>
        <div className="Additional--Title">
            Environmental Policy
        </div>
        <div className="Additional--Title">
            Sustainable Procurement Policy
        </div>
    </div>
    </header>
    <Footer />
    </div>
}

export default Sustainability;