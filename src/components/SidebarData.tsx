import React from 'react'
import * as FaIcons from 'react-icons/fa' 
import FAQ from '../pages/FAQ'
import Home from '../pages/Home'
import Tasks from '../pages/Tasks'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        component: <Home />
    },
    {
        title: 'Tasks',
        path: '/tasks',
        icon: <FaIcons.FaTasks />,
        component: <Tasks />
    },
    {
        title: 'FAQ',
        path: '/faq',
        icon: <FaIcons.FaQuestion />,
        component: <FAQ />
    },
]
