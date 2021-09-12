import React, {useState, useRef, useEffect, useCallback} from "react";
import "./techtree.css";
import {webData, devData} from "../data/web"
import Tree from 'react-d3-tree';

const useCenteredTree = (defaultTranslate = {x: 0, y: 0}) => {
    const [translate, setTranslate] = useState(defaultTranslate);
    const containerRef = useCallback((containerElem) => {
        if (containerElem !== null) {
            const {width, height} = containerElem.getBoundingClientRect();
            setTranslate({x: width / 2, y: 50});
        }
    }, []);
    return [translate, containerRef];
};

const TechTree = () => {
    const [branch, setBranch] = useState("dev");
    const [collapNb, setCollabNb] = useState(false);
    const [data, setData] = useState(devData());
    const [translate, containerRef] = useCenteredTree();
    const [doneID, setDoneID] = useState(["1", "2"]);

    useEffect(() => {
        const { innerWidth: width, innerHeight: height } = window;
        if(width<900){
            setCollabNb(true)
        }
        if (branch === "web") {
            setData(webData())
        } else {
            setData(devData())
        }
    }, [branch,doneID,collapNb]);

    const id_Change = id_change => {
        console.log("running")
        const idx = doneID.indexOf(id_change)
        if (idx < 0) {
            const newArr = [...doneID];
            newArr.push(id_change);
            setDoneID(newArr)
        } else {
            const newArr = [...doneID];
            newArr.splice(idx, 1);
            // newArr.filter(id => id !== String(id_change));
            setDoneID(newArr)


        }
    };

    const handleNodeClick = (nodeDatum) => {
        {
            nodeDatum.attributes?.id && id_Change(nodeDatum.attributes?.id)
        }
    };
    const renderNodeWithCustomEvents = ({
                                            nodeDatum,
                                            toggleNode,
                                            handleNodeClick
                                        }) => (
        <g className={doneID.indexOf(nodeDatum.attributes?.id) > -1 ? "node__done" : "node__branch"}>
            <circle onClick={toggleNode}/>
            <text
                x="22" y="24" onClick={() => handleNodeClick(nodeDatum)} >
                {nodeDatum.name} {nodeDatum.attributes?.id&&doneID.indexOf(nodeDatum.attributes?.id) !== -1 ?"🗸":""}
            </text>
            <g onClick={() => handleNodeClick(nodeDatum)}>
                {nodeDatum.attributes?.id&&doneID.indexOf(nodeDatum.attributes?.id) === -1 ?
                    (<text
                      x="5" y="38"
                      fontSize="18"
                      fill="black"
                      stroke = "None"
                      onClick={() => handleNodeClick(nodeDatum)}>
                        💡
                </text>):""
                }
            </g>
        </g>
    );

    return (
        <div>
            <div className = "ttButtons">
            <button  className = {branch==="dev"?"chosen":""} onClick={e => setBranch("dev")}>I want to learn full-stack web development</button>
            <button className = {branch==="web"?"chosen":""} onClick={e => setBranch("web")}>I want to build my own online business </button>
            </div>
            <div className="tree_container" ref={containerRef}>
                    <div id="treeWrapper" className="treeWrapper">
                        <Tree
                            data={data}
                            translate={translate}
                            rootNodeClassName="node_done"
                            branchNodeClassName="node__branch"
                            leafNodeClassName="node__leaf"
                            depthFactor = "110"
                            pathClassFunc={() => 'custom_link'}
                            nodeSize={collapNb?{x:40, y:100}:{x: 105, y: 100}}
                            separation={collapNb?{nonSiblings:2,siblings:2}:{nonSiblings:1,siblings:1.2}}
                            shouldCollapseNeighborNodes={collapNb}
                            initialDepth={collapNb?"2":"full"}
                            renderCustomNodeElement={(rd3tProps) =>
                                renderNodeWithCustomEvents({...rd3tProps, handleNodeClick})}
                            orientation="vertical"
                            pathFunc={collapNb?"straight":"step"}
                            zoomable={false}/>
                    </div>

            </div>
        </div>
    );
};
export default TechTree;


