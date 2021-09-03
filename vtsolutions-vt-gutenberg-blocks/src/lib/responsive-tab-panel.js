/**
 * WordPress dependencies
 */

import icons from './icons';

const { Component } = wp.element;

const { __, sprintf } = wp.i18n;

const {
    Tooltip,
    TabPanel,
} = wp.components;

/**
 * Internal dependencies
 */


export const vtKitVariables  = {
    media_sizes : {
        xs:  480,
        sm:  576,
        md: 768,
        lg: 992,
        xl: 1200,
    }
};

function getIcon(icon) {
    if ( icon && typeof icons[icon] !== 'undefined' ) {
        // return icon.
        return icons[icon];
    }

    return '';
}


/**
 * Component Class
 */
export default class ResponsiveTabPanel extends Component {
    render() {
        const {
            iconsColor = {},
            activeClass = 'is-active',
            instanceId,
            orientation = 'horizontal',
        } = this.props;

        if ( ! vtKitVariables || ! vtKitVariables.media_sizes || ! Object.keys( vtKitVariables.media_sizes ).length ) {
            return __( 'No media sizes found.' );
        }

        const tabs = [];
        const icons = [
            getIcon( 'tabsMobile' ),
            getIcon( 'tabsTablet' ),
            getIcon( 'tabsLaptop' ),
            getIcon( 'tabsDesktop' ),
            getIcon( 'tabsTv' ),
            getIcon( 'tabsGrid' ),
        ];

        Object.keys( vtKitVariables.media_sizes ).forEach( ( mediaName, i ) => {
            tabs.unshift( {
                name: mediaName,
                title: (
                    <Tooltip text={ sprintf( __( 'Devices with screen width >= %s' ), `${ vtKitVariables.media_sizes[ mediaName ] }px` ) }>
                        <span style={ iconsColor && iconsColor[ mediaName ] ? {
                            color: iconsColor[ mediaName ],
                        } : {} }>
                            { icons[ i ] }
                        </span>
                    </Tooltip>
                ),
                className: 'vt-control-tabs-tab',
            } );
        } );
        tabs.unshift( {
            name: 'all',
            title: (
                <Tooltip text={ __( 'All devices' ) }>
                    <span>
                        { icons[ icons.length - 1 ] }
                    </span>
                </Tooltip>
            ),
            className: 'vt-control-tabs-tab',
        } );

        return (
            <TabPanel
                className="vt-control-tabs"
                tabs={ tabs }
                activeClass={ activeClass }
                instanceId={ instanceId }
                orientation={ orientation }
            >
                { this.props.children }
            </TabPanel>
        );
    }
}
