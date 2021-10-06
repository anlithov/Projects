import React from "react";
import Prism from "prismjs";

export default function Lists() {

    return (
        <div>
            <p className="description">
            Different types for different purposes. Use them to group text or images in column or elsewhere.
            </p>
            <div className="box-component">
                <h3>
                    One-lined List
                </h3>
            <div className="showcase">
                <section>
                    <div className="list-block">
                        <div className="title-list">
                            <span>List header</span>
                            <i className="material-icons">shopping_basket</i>
                        </div>
                        <div className="list-items">
                            <div className="l-item">
                                <div className="text">
                                    <span>Item1</span>
                                </div>
                            </div>
                            <div className="l-item">
                                <div className="text">
                                    <strong>Item2</strong>
                                    <span className="secondary">About Item1 description</span>
                                </div>
                            </div>
                            <div className="l-item">
                                <div className="visual">
                                    <div className="green-box"></div>
                                </div>
                                <div className="text">
                                    <strong>Item3</strong>
                                    <span className="secondary">About Item1 description</span>
                                </div>
                            </div>
                            <div className="l-item">
                                <div className="visual-item">
                                    <div className="green-box"></div>
                                </div>
                                <div className="text">
                                    <strong>Item4</strong>
                                    <span className="secondary">About Item1 description</span>
                                </div>
                                <div className="side-item">
                                    <div className="mos-checkbox"></div>
                                </div>
                            </div>
                            <div className="l-item">
                                <div className="visual-item">
                                    <div className="green-box"></div>
                                </div>
                                <div className="text">
                                    <strong>Item5</strong>
                                    <span className="secondary">About Item1 description</span>
                                </div>
                                <div className="side-item">
                                    <i className="material-icons">blur_on</i>
                                </div>
                            </div>
                        </div>
                        <div className="list-items">
                            <div className="l-item">
                                <strong>Item3</strong>
                                <span className="secondary">About Item1 description</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <pre>
                <code className="language-html">
                    {`
<!--HTML-->
<div className="list-block">
    <div className="title-list">
        <span>List header</span>
        <i className="material-icons">shopping_basket</i>
    </div>
    <div className="list-items">
        <div className="l-item">
            <span>Item1</span>
        </div>
        <div className="l-item">
            <span>Item2</span>
            <span className="secondary">About Item1 description</span>
        </div>
        <div className="l-item withvisual">
            <div className="visual">
                <div className="green-box"></div>
            </div>
            <div className="text">
                <span>Item3</span>
                <span className="secondary">About Item1 description</span>
            </div>
        </div>
        <div className="l-item withvisual">
            <div className="visual-item">
                <div className="green-box"></div>
            </div>
            <div className="text">
                <span>Item4</span>
                <span className="secondary">About Item1 description</span>
            </div>
            <div className="side-item">
                <div className="mos-checkbox"></div>
            </div>
        </div>
         <div className="l-item withvisual">
            <div className="visual-item">
                <div className="green-box"></div>
            </div>
            <div className="text">
                <span>Item5</span>
                <span className="secondary">About Item1 description</span>
            </div>
            <div className="side-item">
                <i className="material-icons">blur_on</i>
            </div>
        </div>
    </div>
    <div className="list-items">
        <div className="l-item">
            <span>Item3</span>
            <span className="secondary">About Item1 description</span>
        </div>
    </div>
</div>
                `}
                </code>
            </pre>
        </div>
        <div className="box-component">
            <h3>
                Two-lined List
            </h3>
            <div className="showcase">
                <section>
                    <div className="list-block">
                        <div className="title-list">
                            <span>List header</span>
                        </div>
                        <div className="list-items">
                            <div className="l-item">
                                <span>Item1</span>
                                <span className="secondary">About Item1 description</span>
                            </div>
                            <div className="l-item">
                                <span>Item2</span>
                                <span className="secondary">About description</span>
                            </div>
                            <div className="l-item">
                                <span>Item3</span>
                                <span className="secondary">Item3 description</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <pre>
                        <code className="language-html">
                            {`
<!--HTML-->
<div className="list-block small">
    <span className="title-list">
        List header
    </span>
    <div className="list-items">
        <div className="l-item">
            <span>Item1</span>
        </div>
        <div className="l-item">
            <span>Item2</span>
        </div>
        <div className="l-item"> 
            <span>Item3</span>
        </div>
        <div className="l-item"> 
            <span>Item4</span>
        </div>
        <div className="l-item"> 
            <span>Item5</span>
        </div>
        <div className="l-item"> 
            <span>Item6</span>
        </div>
        <div className="l-item"> 
            <span>Item7</span>
        </div>
    </div>
</div>
        `}
                    </code>
                </pre>
            </div>
        </div>
    )
}