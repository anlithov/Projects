import React, {useEffect} from "react";
import Prism from "prismjs";

export default function Buttons() {
    useEffect(() => {
        Prism.highlightAll();
    });
    return (
        <div>
            <p className="description">
                There are 4 main button types in mosimac design. The contained button is a standard button mostly used on pages. The alternative one is another version of contained but has light acsent. Outlined button is used for more emphasis due to additional border. And flat buttons are used for less important actions.
            </p>
            <div className="part-block">
                <h3>
                    Contained button
                </h3>
                <div className="showcase buttons">
                    <section>
                        <a className="btn">
                            <span>Button</span>
                        </a>
                        <a className="btn icon-right">
                            <span>Button</span>
                            <i className="material-icons">call_to_action</i>
                        </a>

                        <a className="btn icon-left">
                            <span>Button</span>
                            <i className="material-icons">arrow_downward</i>
                        </a>
                    </section>
                </div>
                <pre>
                    <code className="language-html">
                        {`
<a className="btn">
    <span>Button</span>
</a>
<a className="btn icon-right">
    <span>Button</span>
    <i className="material-icons">call_to_action</i>
</a>
<a className="btn icon-left">
    <span>Button</span>
    <i className="material-icons">arrow_downward</i>
</a>                      
                        `}
                    </code>
                </pre>
            </div>
            <div className="part-block">
                <h3>
                    Alternative contained button
                </h3>
                <div className="showcase buttons">
                    <section>
                        <a className="btn2">
                            <span>Button</span>
                        </a>
                    </section>
                </div>
                <pre>
                    <code className="language-html">
                        {`
<a className="btn2">
    <span>Button</span>
</a>
                        `}
                    </code>
                </pre>
            </div>
            <div className="box-component">
                <h3>
                    One more Alternative contained button
                </h3>
                <div className="showcase buttons">
                    <section>
                        <a className="btn3">
                            <span>Button</span>
                        </a>
                    </section>
                </div>
                <pre>
                    <code className="language-html">
                        {`
<a className="btn3">
    <span>Button</span>
</a>
                        `}
                    </code>
                </pre>
            </div>
            <div className="part-block">
                <h3>
                    Outlined button
                </h3>
                <div className="showcase buttons">
                    <section>
                        <a className="btn-outlined">
                            <span>Button</span>
                        </a>
                    </section>
                </div>
                <pre>
                    <code className="language-html">
                        {`
<a className="btn-outlined">
    <span>Button</span>
</a>   
                        `}
                    </code>
                </pre>
            </div>
            <div className="part-block">
                <h3>
                    Flat button
                </h3>
                <div className="showcase buttons">
                    <section>
                        <a className="btn-flat">
                            <span>Button</span>
                        </a>
                    </section>
                </div>
                <pre>
                    <code className="language-html">
                        {`
<a className="btn-flat">
    <span>Button</span>
</a>   
                        `}
                    </code>
                </pre>
            </div>
            <div className="box-component">
                <h3>
                    Disabled buttons
                </h3>
                <div className="showcase buttons">
                    <section>
                        <a className="btn disabled">
                            <span>Button</span>
                        </a>
                        <a className="btn2 disabled">
                            <span>Button</span>
                        </a>
                        <a className="btn-outlined disabled">
                            <span>Button</span>
                        </a>
                        <a className="btn-flat disabled">
                            <span>Button</span>
                        </a>
                    </section>
                </div>
                <pre>
                    <code className="language-html">
                        {`
<a className="btn disabled">
    <span>Button</span>
</a>
<a className="btn2 disabled">
    <span>Button</span>
</a>
<a className="btn-outlined disabled">
    <span>Button</span>
</a>
<a className="btn-flat disabled">
    <span>Button</span>
</a>  
                        `}
                    </code>
                </pre>
            </div>
            <h1>
                More buttons
            </h1>
            <p className="description">
                What follows below are buttons that goes beyond standard types. But they still mix in good overall into
                design
            </p>
            <div className="part-block">
                <h3>
                    Bagde button
                </h3>
                <div className="showcase buttons">
                    <section>
                        <a className="btn-badge">
                            <div className="badge">
                                <i className="material-icons">blur_on</i>
                            </div>
                        </a>
                        <a className="btn-badge badge-right yellow">
                            <span>Button</span>
                            <div className="badge">
                                <i className="material-icons">bubble_chart</i>
                            </div>
                        </a>
                        <a className="btn-badge badge-left red">
                            <span>Button</span>
                            <div className="badge">
                                <i className="material-icons">business_center</i>
                            </div>
                        </a>

                    </section>
                </div>
                <pre>
                    <code className="language-html">
                        {`
<a className="btn-badge">
    <div className="badge">
        <i className="material-icons">blur_on</i>
    </div>
</a>
<a className="btn-badge badge-right yellow">
    <span>Button</span>
    <div className="badge">
        <i className="material-icons">bubble_chart</i>
    </div>
</a>
<a className="btn-badge badge-left red">
    <span>Button</span>
    <div className="badge">
        <i className="material-icons">business_center</i>
    </div>
</a>
                        `}
                    </code>
                </pre>
            </div>
        </div>

    )
}
