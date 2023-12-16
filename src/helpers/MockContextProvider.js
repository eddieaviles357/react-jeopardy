"use strict";

import { useState } from 'react'
import JeopardyContext from '../JeopardyContext'

const MockContextProvider = ({ children, initialProps = {
    jpData: [],
    playing: false,
    loading: false,
    started: false,
    err: {
        isError: false,
        message: []
    }
} }) => {
    const [jpardyData, setJpardyData] = useState(initialProps.jpData)
    const [isPlaying, setIsPlaying] = useState(initialProps.playing)
    const [isLoading, setIsLoading] = useState(initialProps.loading)
    const [error, setError] = useState({ ...initialProps.err })
    // used to avoid multiple calls to api
    const [isPlayedBtnStarted, setisPlayedBtnStarted] = useState(initialProps.started)

    const startGame = async () => {
        try {
            if (isPlayedBtnStarted) return
            setisPlayedBtnStarted(true)
            setIsLoading(true)
            setJpardyData(await setBoardData())
            setIsPlaying(true)
            setIsLoading(false)
        } catch (err) {
            setError(prevError => (
                {
                    isError: true,
                    message: [
                        ...prevError.message
                    ]
                })
            )
        }
    }

    if (error.isError) return (
        error.message.map((errMsg, idx) => (
            <div
                className='Error'
                key={idx}>
                Something bad happened. Message: <em>{errMsg}</em>
            </div>
        ))
    )

    return (
        <JeopardyContext.Provider value={{
            jpardyData,
            setJpardyData,
            isPlaying,
            setIsPlaying,
            isLoading,
            setIsLoading,
            isPlayedBtnStarted,
            setisPlayedBtnStarted,
            startGame,
        }}>
            {children}
        </JeopardyContext.Provider>
    )
}

export default MockContextProvider;