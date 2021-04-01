import React from "react";
import classes from "./AboutWriter.module.css";
import {NavLink} from "react-router-dom";

const AboutWriter = (match)=>{
    return(
        <div>
            <div className={classes.headerWrapper}>
                <NavLink to={"/home"}><button className="btn btn-light">Back to store</button></NavLink>
            </div>
            <div className={classes.contentWrapper}>
                <div className={classes.contentLeft}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Agatha_Christie.png" alt=""/>
                </div>
                <div className={classes.contentRight}>
                    <div>
                        <div className={classes.title}><h3>Agatha Christie</h3></div>
                        <div className={classes.content}>
                            <div className={classes.contentItem}>
                                <h5>Birth day:</h5>
                                <p>15 September 1890 – 12 January 1976</p>
                            </div>
                            <div className={classes.contentItem}>
                                <h5>Biography:</h5>
                                <p>

                                    Dame Agatha Mary Clarissa Christie, Lady Mallowan, DBE (née Miller; 15 September 1890 – 12 January 1976) was an English writer known for her 66 detective novels and 14 short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple. She also wrote the world's longest-running play, The Mousetrap, which was performed in the West End from 1952 to 2020, as well as six novels under the pseudonym Mary Westmacott. In 1971, she was made a Dame (DBE) for her contributions to literature. Guinness World Records lists Christie as the best-selling fiction writer of all time, her novels having sold more than two billion copies.

                                    Christie was born into a wealthy upper-middle-class family in Torquay, Devon, and was largely home-schooled. She was initially an unsuccessful writer with six consecutive rejections, but this changed in 1920 when The Mysterious Affair at Styles, featuring detective Hercule Poirot, was published. Her first husband was Archibald Christie; they married in 1914 and had one child before divorcing in 1928. During both World Wars, she served in hospital dispensaries, acquiring a thorough knowledge of the poisons which featured in many of her novels, short stories, and plays. Following her marriage to archaeologist Max Mallowan in 1930, she spent several months each year on digs in the Middle East and used her first-hand knowledge of his profession in her fiction.

                                    According to Index Translationum, she remains the most-translated individual author. Her novel And Then There Were None is one of the highest-selling books of all time, with approximately 100 million copies sold. Christie's stage play The Mousetrap holds the world record for the longest initial run. It opened at the Ambassadors Theatre in the West End of London on 25 November 1952, and by September 2018 there had been more than 27,500 performances. The play was closed down in March 2020 due to the coronavirus pandemic.

                                    In 1955, Christie was the first recipient of the Mystery Writers of America's Grand Master Award. Later that year, Witness for the Prosecution received an Edgar Award for best play. In 2013, she was voted the best crime writer and The Murder of Roger Ackroyd the best crime novel ever by 600 professional novelists of the Crime Writers' Association. In September 2015, And Then There Were None was named the "World's Favourite Christie" in a vote sponsored by the author's estate. Most of Christie's books and short stories have been adapted for television, radio, video games, and graphic novels. More than 30 feature films are based on her work.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footerWrapper}>

            </div>
        </div>
    )
}

export default AboutWriter;