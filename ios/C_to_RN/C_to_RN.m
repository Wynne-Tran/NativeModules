#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
@interface RCT_EXTERN_MODULE(C_to_RN, NSObject)
RCT_EXTERN_METHOD(WrapFactorial: (int)num callback: (RCTResponseSenderBlock)callback;)
@end
