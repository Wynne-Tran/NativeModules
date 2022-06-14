#import <React/RCTBridgeModule.h>
#import <Foundation/Foundation.h>
#import "UIKit/UIKit.h"
@interface RCT_EXTERN_MODULE(SendCpp_to_RN, NSObject)

RCT_EXTERN_METHOD(fromCpp:(RCTResponseSenderBlock)successCallback)

@end
