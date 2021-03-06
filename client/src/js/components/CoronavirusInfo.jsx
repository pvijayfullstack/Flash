import React from "react";

import "../../css/coronavirus.scss";

export const CoronavirusInfo = props => (
    <div className="coronavirus">
        <h2>Coronavirus</h2>
        <div>
            <p>
                In the light of the COVID-19 crisis, Flash is donating 100% of all revenue collected from Flash Gold between
                the day schools closed in the UK (20th March) and the end of May.  The My Wish Charity supports West Suffolk
                Hospital and Newmarket Community Hospital, where hundreds of staff are battling their way through these difficult
                times. By subscribing to Flash Gold, you will help provide patients with new medical equipment, refurbishments,
                and entertainment while they are on the road to recovery.
            </p>
            <p>
                While many people are at home, Flash enables you to collaborate safely across the world while still practising
                social distancing. We know that this is a difficult time for many, so we are launching Flash Prioritise a few weeks
                early. Although it hasn&apos;t yet got much content, Flash Prioritise will allow you to learn independently from
                home by ticking off topics from each of your courses.
            </p>
            <p>
                As we all seek to return to normality, everyone at Flash urges you to keep calm and let governments take their
                time in easing restrictions until it is safe to do so. The best you can do is to stay at home to save lives.
            </p>
            <p>
                For further advice, please visit the&nbsp;
                <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">World Health Organisation</a>.
            </p>
        </div>
        <img src="/res/coronavirus-charity-poster.png" alt="coronavirus-charity-poster" />
    </div>
);