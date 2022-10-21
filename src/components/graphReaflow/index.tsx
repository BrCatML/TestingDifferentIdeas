import React, {useEffect,useLayoutEffect,useState} from 'react';
import { Canvas, Edge, EdgeData, EdgeProps, NodeData } from 'reaflow';
import TestData from './testData'
type dataApi = { data: {incidaents: any } }

const MyDiagram = () => {
    const [nodes,setNodes] = useState<NodeData<any>[]>([])
    const [edges,setEdges] = useState<EdgeData[]>([])

    

    useEffect(() => {
        // console.log('--------------------')
        // console.log('TestData',TestData.incidents)
        
        let nodes: NodeData<any>[] = []
        let edgesList: EdgeData[] = []
        let edges: EdgeData[] = []

        for (let nodeName in TestData.incidents ){
            nodes.push({id: nodeName, text: nodeName})

            for (let edgeItem in TestData.incidents[nodeName] ){
                (edgeItem == 'start' || edgeItem == 'during' || edgeItem == 'end') && TestData.incidents[nodeName][edgeItem].incident ?
                (//console.log(' >> nodeName:',nodeName,edgeItem,TestData.incidents[nodeName][edgeItem].incident),
                edgesList.push(
                    {
                        id: `${TestData.incidents[nodeName][edgeItem].incident}-${nodeName}`,
                        from: TestData.incidents[nodeName][edgeItem].incident.split('!').join('') ,//.split('^').join(''),
                        to: nodeName,
                        data: {
                          type: edgeItem,
                          type2:    TestData.incidents[nodeName][edgeItem].incident[0] == '!' || TestData.incidents[nodeName][edgeItem].incident[1] =='!'
                                    ? '!'
                                    : undefined
                        }  
                    }
                ))
                : ''
            }
        }

        edgesList.map((v,i) => {
            for (let nnn of nodes){
                if (v.from && v.from.split('/').join('') != v.from) {
                    let mjjj = nnn.id.match(new RegExp(v.from?.split('/').join('')))
                    if (mjjj) {
                        edges.push(
                            {
                                id: `${v.data.type}-${nnn.id}-${v.to}`,
                                from: nnn.id,
                                to: v.to,
                                data: v.data  
                            }
                        )
                    }
                }
            }
        })

        // console.log(nodes,edges)
        setNodes(nodes)
        setEdges(edges)

    }, [])
    
    return (
        <div style={{ top: 0, bottom: 0, left: 0, right: 0 }}>
    <Canvas
        nodes={nodes}
        edges={edges}
        edge={(edge: EdgeProps) => {
            //@ts-ignore
            const typeEdge = edge.data?.type
            return (
            <Edge
            {...edge}
            style={{ stroke: typeEdge == "during" ? 'green' : typeEdge == 'end'? 'red' : 'blue'}}
            />
            )}}
        // width={window.innerWidth}
        width={document.documentElement.clientWidth}
        height={document.documentElement.clientHeight}
        // height={800}
        // readonly
        disabled
        zoom={0.5}
        // fit
        // direction='RIGHT'
        // maxWidth={800}
        // maxHeight={800}
    />
    </div>
)}

export default MyDiagram